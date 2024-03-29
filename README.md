
# Message App UI 

Honestamente minha ideia inicial nem era postar esse "projeto" ou dar esse nome, acabei apenas vendo o vídeo [Flatlist com Scroll Inverso no React Native](https://www.youtube.com/watch?v=fpAlf1vPCE4&t=60s) do [Rodrigo Gonçalves](https://www.youtube.com/@orodrigogo) e como migrei do JS para o TS recemente achei que seria um projeto simples e bacana para fazer essa "passada" em React Native.

De fato consigo ver muitas vantagens em trabalhar com TS/TSX desde a facilidade na hora de entender a arquitetura do projeto, segurança, entender melhor a função de cada variável, entre outras utilizadades... 

## Aprendizados
- Trabalhar com TS em React Native;


## Message Component
Embora esse trecho não tenha sido falado no vídeo, eu acabei construindo esse componente para ir testando o TS/TSX e já vinha criando essa opnião. 

Agora consolidei, realmente o TS facilita bastante nesse trabalho com arrays e objetos, sendo mais fácil acessar os elementos dentro deles, nesse caso passei via props um elemento de um array e TS facilitou acessar suas propriedades.

```javascript
import { View, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { MessageProps } from "../../@types/message";

export default function Message(
{
    item, 
    messageStyle
}:{
    item: MessageProps,
    messageStyle: StyleProp<TextStyle>,
}) {

  return (
    <Text
      style={[
        styles.message,
        messageStyle,
      ]}
    >
      {item.message}
    </Text>
  );
}

const styles = StyleSheet.create({
})
```


## Screenshots

### Enviando mensagem
<div align="center">
    <img height="50%" src="https://github.com/Victor-Lis/Message-App-UI/blob/master/project-images/UI1.jpg" alt="Enviando Mensagem">
</div>

### Recebendo mensagem
<div align="center">
    <img height="50%" src="https://github.com/Victor-Lis/Message-App-UI/blob/master/project-images/UI2.jpg" alt="Recebendo Mensagem">
</div>

## Autores

- [@Victor-Lis](https://www.github.com/Victor-Lis)

