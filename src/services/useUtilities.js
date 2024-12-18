import * as mime from 'react-native-mime-types';

import DocumentPicker, {types} from 'react-native-document-picker';
import React, {useCallback} from 'react';

import {API_BASE_URL} from './apiServices';
import FileViewer from 'react-native-file-viewer';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';
import showToast from './showToast';

const useUtilities = () => {
  const browsePictures = useCallback(() => {
    return ImagePicker.openPicker({
      multiple: false,
      compressImageQuality: 0.5,
      width: 400,
      height: 400,
      mediaType: 'photo',
      cropping: true,
    })
      .then(images => {
        let imageSize = images.size / (1024 * 1024);

        if (imageSize > 4) {
          Alert.alert('warning', 'Image should be less than 4 MB');
          return false;
        }

        return images;
      })
      .catch(err => {
        return false;
      });
  });

  const browseDocument = useCallback(async isMulti => {
    return await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      allowMultiSelection: isMulti ? true : false,
      type: [
        types.doc,
        types.docx,
        types.images,
        types.pdf,
        types.plainText,
        types.ppt,
        types.xls,
        types.xlsx,
      ],
    }).catch(err => {
      return false;
    });
  });

  const downloadFile = useCallback(async url => {
    const extension = url.split(/[#?]/)[0].split('.').pop().trim();
    const localFile = `${RNFS.DocumentDirectoryPath}/temporaryfile.${extension}`;

    const options = {
      fromUrl: `${API_BASE_URL}/${url}`,
      toFile: localFile,
    };

    RNFS.downloadFile(options)
      .promise.then(() => FileViewer.open(localFile))
      .then(res => {
      })
      .catch(error => {
        showToast(`No app associated with ${extension} file.`);
      });
  });

  return {
    browsePictures,
    browseDocument,
    downloadFile,
  };
};

export default useUtilities;
