import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles'
import { Input, ListItem , Item , DeleteModal } from './components/index'
import {colors} from './constants/colors'



export default function App() {
  const [text, setText] = useState('')
  const [events, setEvents] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const onnAddEvent = () => {
    if (text.length === 0) return
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ])
    setText('')
  }

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  }

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  }

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id))
    setModalVisible(!modalVisible)
  }

  //return implicito
  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => onHandlerEvent(item.id)}
    />
  )

  return (
    <View style={styles.container}>
      <Input
        placeHolder='Enter your event'
        value={text}
        onChangeText={(text) => setText(text)}
        buttonTitle='+'
        // buttonColor={}
        onHandlerButton={onnAddEvent}
      />
      <ListItem
        data={events}
        renderItem={renderItem}
        alwaysBounceVertical={false}
      />
      <DeleteModal
        modalVisible={modalVisible}
        animationType='slide'
        title='Event Detail'
        confirmationText='Are you sure to delete this item?'
        moreInformation={selectedEvent?.value}
        primaryButton='Cancel'
        secondaryButton='Delete'
        onHandlerPrimaryButton={() => onHandlerCancelModal()}
        onHandlerSecondaryButton={() => onHandlerDeleteEvent(selectedEvent?.id)}
        primaryButtonColor={colors.primary}
        secondaryButtonColor={colors.primary}
      />
    </View>
  );
}

