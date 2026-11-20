import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Alert, Image, Button} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const datasource = [
  {
    data: [
      {name: 'Iced Latte',price: 5.50,description:'Cold espresso with milk',image: 'https://static.vecteezy.com/system/resources/previews/044/267/141/non_2x/ice-coffee-cup-isolated-transparent-background-free-png.png'},
      {name: 'Matcha Latte',price: 6.00,description:'Creamy Japanese green tea',image: 'https://png.pngtree.com/png-clipart/20250625/original/pngtree-matcha-latte-with-ice-png-image_21233713.png'},
    ],
    title: "DRINK", icon:'bottle-water' , backgroundcolor: 'yellow'
  },
  {
    data: [
      {name: 'Chocolate Cake',price: 7.50,description:'Rich chocolate fudge',image: 'https://static.vecteezy.com/system/resources/previews/054/237/027/non_2x/rich-chocolate-cake-with-a-missing-slice-free-png.png'},
      {name: 'Strawberry Cheesecake',price: 8.00,description:'Creamy cheesecake',image: 'https://static.vecteezy.com/system/resources/previews/058/173/486/non_2x/delicious-strawberry-cheesecake-slices-with-a-vibrant-red-jelly-topping-isolated-on-a-transparent-background-strawberry-cheesecake-isolated-on-background-free-png.png'},

    ],
    title: "DESSERTS", icon:'cheese', backgroundcolor: 'skyblue'
  },
];

const renderItem = ({item, index, section}) => {
  return (
      <TouchableOpacity style={[styles.opacityStyle, {backgroundColor: '#c4a484'}]}
                        onPress={() => Alert.alert(item.name +" "+ "is selected!")}>
        <Image source={{uri:item.image}}
               style={{width:100, height:100}}
        />
        <View style={{flex:1}}>
          <Text style={styles.nameStyle}> {item.name} </Text>
          <Text style={styles.descriptionStyle}> {item.description} </Text>
          <Text style={styles.priceStyle}> ${item.price} </Text>
        </View>
      </TouchableOpacity>
  );
};

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>L10 Food Menu </Text>
        <View style={styles.buttonContainer}>
          <Button
              onPress={() => Alert.alert("Coming Soon")}
              title="Add More" />
        </View>

        <SectionList sections={datasource}
                     renderItem={renderItem}
                     contentContainerStyle={{padding:20}}
                     renderSectionHeader={({section:{title,icon}})=>(
                         <View style={[styles.headerContainer,{backgroundColor:'brown'}]}>
                           <FontAwesome6 name={icon} size={25} color="black" />
                           <Text style={styles.headerText}>{title}</Text>
                         </View>
                     )}/>
        <StatusBar style="auto"/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor : 'blue',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  buttonContainer:{
    margin:10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  priceStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'brown',
  },
  descriptionStyle: {
    fontSize: 12,
    color: 'brown',
    fontWeight: 'bold',
  },}
  );

