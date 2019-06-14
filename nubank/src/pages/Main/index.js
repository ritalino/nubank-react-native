import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />

        <PanGestureHandler
          onGestureEvent={}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 7.845,88</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 50,00 recebida de Felipe Barrella Netto hoje às 07:23h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs />
    </Container>
  );
}
