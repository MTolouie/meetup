import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = ()=>{
    const addEventHandler = (newEvent)=>{
        console.log(newEvent);
    }
    return <NewMeetupForm onAddEvent={addEventHandler}/>;
}

export default NewMeetupPage;