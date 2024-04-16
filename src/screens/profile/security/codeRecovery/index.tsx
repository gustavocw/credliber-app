import { ButtonBack } from '@components/returnScreen/buttonBack';
import ContinueButtonCenter from '@screens/register/components/continueButton';
import React, { useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { style } from './styles/index.style';

export const CodeRecoveryScreen: React.FC = () => {
  const codeLength = 5;
  const [code, setCode] = useState<string[]>(Array(codeLength).fill(''));
  const inputRefs = useRef<(TextInput | null)[]>(Array(codeLength).fill(null));

  const handleCodeInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (text && index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.content} >
          <View style={style.header}>
            <ButtonBack title="Código" />
          </View>
          <View style={style.TitleBox}>
            <Text style={style.description}>
              Confirme o código que foi enviado para o seu e-mail.
            </Text>
          </View>
          <View style={style.inputContainer}>
            {code.map((_, index) => (
              <TextInput
                key={index}
                style={style.codeInput}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(text) => handleCodeInput(text, index)}
                value={code[index]}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                onKeyPress={({ nativeEvent }) => {
                  if (nativeEvent.key === 'Backspace' && index > 0) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </View>
        </View>
        <View>
          <ContinueButtonCenter />
        </View>
      </View>
    </ScrollView>
  );
};
