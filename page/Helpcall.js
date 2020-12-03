import React from 'react';
import { WebView } from 'react-native-webview';

export default Helpcall = () => {
    return (
        <WebView
          source={{uri: 'https://helpcall.mnd.mil.kr/user/indexMain.action?siteId=helpcall2'}}
        />
      );
    }