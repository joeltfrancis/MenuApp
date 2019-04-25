import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import Menulogo from "../assets/images/logo.png";
import colors from "../config/colors";
import strings from "../config/strings";

interface State {
  Cuisine: string;
  FoodType: string;
  WantedIngredients: string;
  UnwantedIngredients: string; 
  }

   let CuisineArray: string[] = [];  
   let FoodTypeArray: string[] = [];
   let IngredientsArray: string[] = [];

  function populateArray(passed:string[],DBarray:string[])
  {
    for(var i = 0;i<passed.length;i++){
      passed[i] = DBarray[i];
    }
  }

  function printArray(firstarray:string[])
  {
    for(var i = 0;i<firstarray.length;i++)
    {
      console.log(firstarray[i]);
    }
  }

  class Questionaire extends React.Component<{}, State> {
    readonly state: State= {
    
    Cuisine: "What cuisine do you prefer?",
    FoodType: "What are your favorite types of food?",
    WantedIngredients: "What ingredients do you like?",
    UnwantedIngredients: "What ingredients do you dislike?" 
    };
  
    handleCuisineChange = (Cuisine: string) => {
      this.setState({ Cuisine: Cuisine });
    };
  
    handleFoodTypeChange = (FoodType: string) => {
      this.setState({ FoodType: FoodType });
    };

    handleWantedIngredientsChange = (WantedIngredients: string) => {
      this.setState({ WantedIngredients: WantedIngredients });
    };
  
    handleUnwantedIngredientsChange = (UnwantedIngredients: string) => {
      this.setState({ UnwantedIngredients: UnwantedIngredients });
    };
  
  
    handleSumbitAnswers = () => {
      console.log("Answers Submitted");
    };
  
    render() {
      return (

        <View style={styles.container}>
          
        <View style={styles.form}>
        <Text style={styles.Intro}>
            What is your favorite Cuisine? 
        </Text>
            <FormTextInput
              value={this.state.Cuisine}
              onChangeText={this.handleCuisineChange}
              placeholder={strings.Cuisine_PLACEHOLDER}
            />
            
          <Text style={styles.Intro}>
            What is your favorite Food Item? 
        </Text>
          
            <FormTextInput
              value={this.state.FoodType}
              onChangeText={this.handleFoodTypeChange}
              placeholder={strings.FoodType_PLACEHOLDER}
            />


            <Text style={styles.Intro}>
            What are your favorite ingredients? 
           </Text>
            <FormTextInput
              value={this.state.WantedIngredients}
              onChangeText={this.handleWantedIngredientsChange}
              placeholder={strings.WantedIngredients_PLACEHOLDER}
            />
            
            <Text style={styles.Intro}>
            What ingredients do you hate?
            </Text>
            <FormTextInput
              value={this.state.UnwantedIngredients}
              onChangeText={this.handleUnwantedIngredientsChange}
              placeholder={strings.UnwantedIngredients_PLACEHOLDER}
            />
            
            
            <Button
              label={strings.SubmitAnswers}
              onPress={this.handleSumbitAnswers}
            />
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.FADED_White,
      alignItems: "center",
      justifyContent: "space-between"
    },
   
    form: {
      flex: 1,
      justifyContent: "center",
      width: "70%",
    },
    Intro: {
      color: '#999',
      fontWeight: 'bold',
    },
  });
  
  export default Questionaire;