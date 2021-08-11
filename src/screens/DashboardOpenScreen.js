import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import TopComponent from '../components/TopComponent';
import {useNavigation} from '@react-navigation/native';
import DashboardComponent from '../components/DashboardComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import DashedView from '../components/DashedView';
import CustomButton from '../components/CustumButton';
import styles from './styles/dashboardOpemStyles';
const DashboardOpen = ({route}) => {
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Car1', value: 'Card1'},
    {label: 'Card2', value: 'Card2'},
  ]);
  const [items2, setItems2] = useState([
    {label: 'Euro', value: 'Euro'},
    {label: 'Dolar', value: 'Dolar'},
  ]);
  const [items3, setItems3] = useState([
    {label: 'Value1', value: 'Value1'},
    {label: 'Value2', value: 'Value2'},
  ]);
  const navigation = useNavigation();
  const {
    name,
    background,
    logo,
    iconx,
    text,
    colors,
    mini,
    currency,
    subtitle,
    multipleOptions,
  } = route.params;
  const NavigateTo = screnName => navigation.navigate(screnName);
  return (
    <View style={styles.background}>
      <TopComponent
        navBack={NavigateTo}
        showCircle={true}
        screenName={'Dashboard'}
      />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{name}</Text>
        </View>
        <DashboardComponent
          name={name}
          background={background}
          logo={logo}
          iconx={iconx}
          text={text}
          colors={colors}
          mini={mini}
          currency={currency}
          subtitle={subtitle}
        />
        <View
          style={styles.subtitleView}>
          <Text style={styles.subtitleText}>
            The total value you derived here will be the amount you’ll be
            receiving during the total transaction process
          </Text>
        </View>
        {!multipleOptions ? (
          <View
            style={styles.oneOptionView}>
            <TextInput style={styles.textInput} placeholder={name + ' value'} />
          </View>
        ) : (
          <View style={styles.multipleOptionsView}>
            <DropDownPicker
              style={styles.dropdownCard}
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
              zIndex={300}
              placeholder="Card type"
            />
            <DropDownPicker
              style={styles.dropdownCurrency}
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              zIndex={200}
              placeholder="Card currency"
            />
            <DropDownPicker
              style={styles.dropdownValue}
              labe
              open={open3}
              value={value3}
              items={items3}
              setOpen={setOpen3}
              setValue={setValue3}
              setItems={setItems3}
              zIndex={100}
              placeholder="Card value"
            />
          </View>
        )}
        <DashedView value='N 00,000.00'/>
        <View style={styles.buttonView}>
        <CustomButton text='CONTINUE'/>
        </View>
       
      </ScrollView>
    </View>
  );
};

export default DashboardOpen;
