import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible ] = useState(false)

  //To use the ScrollView
  // function addGoalHandler() {
  //   // console.log(enteredGoalText)
  //   // setCourseGoals([...courseGoals, enteredGoalText])
  //   setCourseGoals((currentCourseGoals) => [
  //     ...currentCourseGoals,
  //     enteredGoalText,
  //   ]);
  // }


  //To use the FlatList
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
    // console.log("Delete")
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal)=> goal.id !== id)
    })
  }

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }



  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View> */}

      <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
      {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>}


      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}


      {/* Flatlist render items when it is scrolled only */}
        <FlatList 
        data={courseGoals}
        renderItem={(itemData)=>{
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
        }}
        keyExtractor={(item, index)=> {
          return item.id;
        }}
        alwaysBounceVertical={false} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },

});
