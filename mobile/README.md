# MeetApp Mobile

## Rodando a aplicação

Instale as dependências do projeto, fazendo:
```bash
$ yarn
```

Após a instalação, faça:
```bash
$ react-native run-android
```
ou
```bash
$ react-native run-ios
```

Se fechar a aplicação e desejar rodá-la novamente, não é necessário rodar o comando acima novamente, apenas faça:
```bash
$ react-native start
```

Obs.1: O presente projeto foi testado apenas na plataforma Android.

Obs.2: O arquivo ```api.js``` presente em ```src/services``` está configurado para a utilização do emulador do Android Studio. Altere-o se necessário.

Obs.3: Lembre-se de rodar o comando ```adb reverse tcp:3333 tcp:3333``` para conseguir visualizar os dados corretamente no emulador.
