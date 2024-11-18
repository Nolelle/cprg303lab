import ToDoForm from "../components/ToDoForm"
import ToDoList from "../components/ToDoList"
import MainLayout from '../layouts/MainLayout';



export default HomeScreen({navigation}) {
    const [tasks, setTasks] = useState(['Do laundry',
  'Go to gym',
  'Walk dog']);

  const addTask = (task) =>{
    setTasks([...tasks, task]);
  };

    return (
      <MainLayout>
        <Button
        title="Go to About"
              onPress={() => navigation.navigate('About')}
          />
          <ToDoList tasks = {tasks}/>
          <ToDoForm addTask = {addTask}/>
      </MainLayout>
    )
}
