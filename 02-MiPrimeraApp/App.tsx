import React from 'react'
import { SafeAreaView } from 'react-native';
import { TareaScreen10 } from './src/screens/TareaScreen10';
import { TareaScreen7 } from './src/screens/TareaScreen7';
import { TareaScreen8 } from './src/screens/TareaScreen8';
import { TareaScreen9 } from './src/screens/TareaScreen9';
// import { TareaScreen6 } from './src/screens/TareaScreen6';
// import { TareaScreen5 } from './src/screens/TareaScreen5';
// import { TareaScreen } from './src/screens/TareaScreen';
// import { TareaScreen2 } from './src/screens/TareaScreen2';
// import { TareaScreen3 } from './src/screens/TareaScreen3';
// import { TareaScreen4 } from './src/screens/TareaScrenn4';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';


export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BoxObjectModelScreen />    */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <TareaScreen /> */}
      {/* <TareaScreen3 /> */}
      {/* <TareaScreen4 /> */}
      {/* <TareaScreen5 /> */}
      {/* <TareaScreen6 /> */}
      {/* <TareaScreen7 /> */}
      {/* <TareaScreen8 /> */}
      {/* <TareaScreen9 /> */}
      <TareaScreen10 />
    </SafeAreaView>
    // <HolaMundoScreen />
    // <ContadorScreen />
    
  )
}


export default App;