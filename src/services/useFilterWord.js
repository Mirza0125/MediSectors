import BadwordContext from '../AppContexts/BadwordContext';
import {useContext} from 'react';

const defaultOptions = {
  emptyList: false,
  exclude: [],
  splitRegex: /\b/,
  placeHolder: '*',
  regex: /[^a-zA-Z0-9|\$|\@]|\^/g,
  replaceRegex: /\w/g,
};

function useFilterWord() {
  const {badwords} = useContext(BadwordContext);

  const exclude = defaultOptions.exclude;
  const splitRegex = defaultOptions.splitRegex;
  const placeHolder = defaultOptions.placeHolder;
  const regex = defaultOptions.regex;
  const replaceRegex = defaultOptions.replaceRegex;

  // it filters from badwords list and return if it's profane word or not
  function isProfane(string) {
    return (
      badwords.filter(word => {
        const wordExp = new RegExp(
          `\\b${word.replace(/(\W)/g, '\\$1')}\\b`,
          'gi',
        );
        return !exclude.includes(word.toLowerCase()) && wordExp.test(string);
      }).length > 0 || false
    );
  }

  // it replaces the profane words with ***
  function replaceWord(string) {
    return string.replace(regex, '').replace(replaceRegex, placeHolder);
  }

  // clarn word takes string arguments and send to isProfane and the replaceword functions
  function cleanWord(string) {
    return string
      .split(splitRegex)
      .map(word => {
        return isProfane(word) ? replaceWord(word) : word;
      })
      .join(splitRegex.exec(string)[0]);
  }

  return {
    isProfane,
    replaceWord,
    cleanWord,
  };
}

export default useFilterWord;
