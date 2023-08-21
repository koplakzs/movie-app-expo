// import { View, Text } from "react-native";
// import React from "react";

// const index = () => {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   );
// };

// export default index;

import React, { Component } from "react";
import { Redirect } from "expo-router";

export class index extends Component {
  render() {
    return <Redirect href="/home" />;
  }
}

export default index;
