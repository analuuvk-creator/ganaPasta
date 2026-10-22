
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

const COLORS = {
  red: '#941E20',
  darkRed: '#701316',
  gold: '#D9A52E',
  cream: '#FFF7EA',
  white: '#FFFFFF',
  ink: '#392824',
  muted: '#927E73',
  line: '#E9DCC9',
};

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.darkRed}
      />


      <View style={styles.header}>
        <View style={styles.logoImageFrame}>
          <Image
            source={require('./assets/gana-logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
            accessibilityLabel="Logo oficial do GANA Pasta"
          />
        </View>

        <Text style={styles.slogan}>
          FEITO COM CARINHO, SERVIDO QUENTINHO.
        </Text>
      </View>

      <ScrollView
        style={styles.loginScroll}
        contentContainerStyle={styles.loginContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>
          BENVENUTO!
        </Text>

        <Text style={styles.loginTitle}>
          Que bom ter você{'\n'}à nossa mesa.
        </Text>

        <Text style={styles.loginDescription}>
          Entre na sua conta e descubra
          {'\n'}seus sabores favoritos.
        </Text>

        <View style={styles.loginCard}>
          <Text style={styles.fieldLabel}>
            E-mail
          </Text>

          <TextInput
            style={styles.loginInput}
            placeholder="Digite seu e-mail"
            placeholderTextColor={COLORS.muted}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.fieldLabel}>
            Senha
          </Text>

          <TextInput
            style={styles.loginInput}
            placeholder="Digite sua senha"
            placeholderTextColor={COLORS.muted}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() =>
              Alert.alert(
                'Recuperar senha',
                'A recuperação de senha será implementada posteriormente.'
              )
            }
          >
            <Text style={styles.forgotText}>
              Esqueci minha senha
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.85}
            onPress={() => {
              if (!email.trim() || !senha.trim()) {
                Alert.alert(
                  'Falta preencher!',
                  'Digite seu e-mail e sua senha para continuar.'
                );
                return;
              }

              Alert.alert(
                'Interface funcionando!',
                'Os campos estão funcionando. O login real será conectado ao backend posteriormente.'
              );
            }}
          >
            <Text style={styles.loginButtonText}>
              ENTRAR NA MINHA CONTA
            </Text>
          </TouchableOpacity>

          <View style={styles.loginDivider} />

          <Text style={styles.registerText}>
            Ainda não tem uma conta?
          </Text>

          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => setTelaAtual('cadastro')}
          >
            <Text style={styles.registerButtonText}>
              CRIAR MINHA CONTA
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.loginFooter}>
          LA DOLCE VITA COM GANA PASTA
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  header: {
    backgroundColor: COLORS.darkRed,
    paddingHorizontal: 25,
    paddingTop: 22,
    paddingBottom: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  logoImageFrame: {
    alignSelf: 'center',
    width: 170,
    height: 170,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: COLORS.gold,
    overflow: 'hidden',
    marginBottom: 12,
  },

  logoImage: {
    width: '100%',
    height: '100%',
  },


  logo: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: -1,
  },

  logoGold: {
    color: COLORS.gold,
  },

  slogan: {
    color: COLORS.cream,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 7,
  },

  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 42,
  },

  eyebrow: {
    color: COLORS.red,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 15,
  },

  title: {
    color: COLORS.ink,
    fontSize: 31,
    lineHeight: 38,
    fontWeight: '900',
  },

  description: {
    color: COLORS.muted,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 15,
  },

  card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 20,
    padding: 22,
    marginTop: 35,
  },

  cardTitle: {
    color: COLORS.red,
    fontSize: 17,
    fontWeight: '800',
  },

  cardDescription: {
    color: COLORS.muted,
    fontSize: 12,
    marginTop: 9,
    lineHeight: 19,
  },


  loginScroll: {
    flex: 1,
  },

  loginContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 32,
  },

  eyebrow: {
    color: COLORS.red,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },

  loginTitle: {
    color: COLORS.ink,
    fontSize: 30,
    lineHeight: 37,
    fontWeight: '900',
  },

  loginDescription: {
    color: COLORS.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 10,
    marginBottom: 24,
  },

  loginCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 20,
    padding: 20,
  },

  fieldLabel: {
    color: COLORS.ink,
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 10,
  },

  loginInput: {
    height: 49,
    backgroundColor: COLORS.cream,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 11,
    paddingHorizontal: 14,
    color: COLORS.ink,
    fontSize: 13,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    paddingVertical: 13,
  },

  forgotText: {
    color: COLORS.red,
    fontSize: 11,
    fontWeight: '700',
  },

  loginButton: {
    minHeight: 49,
    borderRadius: 11,
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  loginButtonText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  loginDivider: {
    height: 1,
    backgroundColor: COLORS.line,
    marginVertical: 20,
  },

  registerText: {
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: 12,
  },

  registerButton: {
    marginTop: 12,
    minHeight: 45,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerButtonText: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: '900',
  },

  loginFooter: {
    color: COLORS.gold,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 27,
  },

  footer: {
    color: COLORS.gold,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 2,
    textAlign: 'center',
    marginTop: 35,
  },
});
