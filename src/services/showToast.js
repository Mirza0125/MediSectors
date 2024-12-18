import Toast from 'react-native-simple-toast';

export default function showToast(desc) {
  Toast.show(desc, Toast.SHORT, {
    tapToDismissEnabled: true,
  });
}
