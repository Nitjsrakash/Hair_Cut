export const colors = {
    // colorPrimary: "#3da0f7",
    colorPrimary: "#2a62fd",
    colorRed: "#eb2226",
    colorWhite: "#fff",
    colorBlack: "#000",
    colorBackground: "#f5f5f5",
    colorGrey: '#b2b2b2',
    colorLightGrey: "#d1d1d1",
    colorPink: '#FFCFF4',
    colorBabyPink: '#ECDFFA',
    colorInactive: "#212121",
    colorDarkGrey: '#656565',
    colorAnswer: "#09e0d2",
    colorResume: "#f2cf1d",
    colorCompleted: "#22ab34",
    colorGreen: "#00b746",
    colorOrange: "#ffaa00",
    colorAttachmentBox: "#F5F6F5"
  
  }
  
  export const getRandomColor = () => {
    var letters = '0123456789'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    console.log("RANDOM_COLOR", color)
    return color;
  }
  
  