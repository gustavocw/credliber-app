import RightArrowBlack from '@assets/icons/dash/arrowRightBlack';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@routes';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { style } from './styles/index.style';
type DetailsTransacoesRouteProp = RouteProp<RootStackParamList, 'DetailsTransection'>;

export const DetailsTransection = (prop: any) => {
  const route = useRoute<DetailsTransacoesRouteProp>();
  const transacao = route.params?.transacao;
  console.log(transacao);

  return (
    <>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <ButtonBack title="Detalhes da transação" subTitle="" />
        </View>
        <View style={style.containerDash}>
          <View style={style.dash}>
            <View style={style.textDash}>
              <Text style={style.titleDash}>Destinatário</Text>
              <Text style={style.nameDash}>{transacao.customer.name}</Text>
            </View>
            <TouchableOpacity style={style.buttonNext}>
              <Icon name="right" size={20} color="#EA0356" />
            </TouchableOpacity>
          </View>
          <View style={style.containerDetails}>
            <View style={style.columLeft}>
              <Text style={style.titleDetails}>Valor</Text>
              <Text style={[style.titleDash, { position: 'relative', top: 30, color: '#000000' }]}>
                Contrato
              </Text>
              <Text style={[style.titleDash, { position: 'relative', top: 40, color: '#000000' }]}>
                Comissão
              </Text>
              <Text style={[style.titleDash, { position: 'relative', top: 50, color: '#000000' }]}>
                Data
              </Text>
              <Text style={[style.titleDash, { position: 'relative', top: 60, color: '#000000' }]}>
                Status
              </Text>
            </View>
            <View style={style.columRight}>
              <Text style={style.titleValue}>{`R$${transacao.value}`}</Text>
              <Text style={[style.titleDash, { position: 'relative', top: 10, color: '#000000' }]}>
                {transacao.contract}
              </Text>
              <Text style={[style.titleDash, { position: 'relative', top: 20, color: '#000000' }]}>
                R${transacao.commission}
                {`(${2}%)`}
              </Text>
              <Text style={[style.titleDash, { position: 'relative', top: 30, color: '#000000' }]}>
                {transacao.createdAt}
              </Text>
              <Text style={[style.titleDash, { position: 'relative', top: 40, color: '#000000' }]}>
                {transacao.status === 'COMPLETED' ? (
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconMaterial name="check-circle" size={20} color="#27AE60" />
                    <Text style={{ color: '#27AE60' }}>Aprovado</Text>
                  </View>
                ) : transacao.status === 'REFUSED' ? (
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconMaterial name="error" size={20} color="#EB5757" />
                    <Text style={{ color: '#EB5757' }}>Recusado</Text>
                  </View>
                ) : transacao.status === 'PENDING' ? (
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <IconMaterial name="hourglass-empty" size={20} color="#F2994A" />
                    <Text style={{ color: '#F2994A' }}>Em análise</Text>
                  </View>
                ) : null}
              </Text>
            </View>
          </View>
          <View style={style.containerButton}>
            <TouchableOpacity style={style.button}>
              <Icon name="bars" size={25} color="#000000" />
              <Text
                style={{
                  fontSize: 17,
                  position: 'relative',
                  left: 10,
                  fontFamily: 'Montserrat_500Medium',
                }}>
                Vizualizar comprovante
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style.containerAjuda}>
            <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}>Algum erro na transação?</Text>
            <View style={style.help}>
              <Text style={{ fontFamily: 'Montserrat_600SemiBold' }}>Ajuda</Text>
              <RightArrowBlack style={{ marginTop: 1 }} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
