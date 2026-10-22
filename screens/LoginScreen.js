
import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

const COLORS = {
  red: '#941E20',
  darkRed: '#680F13',
  gold: '#D7A62D',
  cream: '#FFF5E5',
  white: '#FFFDF8',
  ink: '#392824',
  muted: '#8C7770',
  line: '#E8DCC7',
};

export default function LoginScreen({
  onLogin,
  onRegister,
  onGuest,
  onForgotPassword,
}) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!identifier.trim() || !password.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha seu e-mail ou telefone e sua senha.'
      );
      return;
    }

    if (onLogin) {
      onLogin({
        identifier: identifier.trim(),
        password,
      });
    } else {
      Alert.alert(
        'Login',
        'A interface está pronta. Ainda precisamos conectar a autenticação.'
      );
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.redBackground} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.brandArea}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoEmoji}>🐔</Text>
              <Text style={styles.logoPasta}>🍝</Text>
            </View>

            <Text style={styles.brandName}>
              GANA <Text style={styles.goldText}>Pasta</Text>
            </Text>

            <Text style={styles.tagline}>
              Autêntica pasta italiana
            </Text>
          </View>

          <View style={styles.loginCard}>
            <View style={styles.tabs}>
              <View style={styles.activeTab}>
                <Text style={styles.activeTabText}>Entrar</Text>
              </View>

              <TouchableOpacity
                style={styles.inactiveTab}
                onPress={onRegister}
              >
                <Text style={styles.inactiveTabText}>
                  Criar conta
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>
              Bem-vindo de volta!
            </Text>

            <Text style={styles.subtitle}>
              Entre para continuar seu pedido.
            </Text>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>E-mail ou telefone</Text>

              <TextInput
                style={styles.input}
                value={identifier}
                onChangeText={setIdentifier}
                placeholder="Seu e-mail ou telefone"
                placeholderTextColor={COLORS.muted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Senha</Text>

              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Digite sua senha"
                placeholderTextColor={COLORS.muted}
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={handleLogin}
              />
            </View>

            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => {
                if (onForgotPassword) {
                  onForgotPassword();
                } else {
                  Alert.alert(
                    'Recuperar senha',
                    'A recuperação de senha será implementada posteriormente.'
                  );
                }
              }}
            >
              <Text style={styles.forgotText}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.loginButtonText}>
                Entrar
              </Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity
              style={styles.guestButton}
              onPress={onGuest}
              activeOpacity={0.8}
            >
              <Text style={styles.guestButtonText}>
                Entrar como visitante
              </Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Feito com carinho, servido quentinho.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.cream,
  },

  flex: {
    flex: 1,
  },

  redBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 275,
    backgroundColor: COLORS.darkRed,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 28,
  },

  brandArea: {
    alignItems: 'center',
    paddingTop: 28,
    paddingBottom: 72,
  },

  logoCircle: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.cream,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoEmoji: {
    fontSize: 42,
  },

  logoPasta: {
    position: 'absolute',
    bottom: 6,
    right: 2,
    fontSize: 25,
  },

  brandName: {
    color: COLORS.white,
    fontSize: 31,
    fontWeight: '900',
    marginTop: 10,
  },

  goldText: {
    color: COLORS.gold,
  },

  tagline: {
    color: COLORS.cream,
    fontSize: 12,
    marginTop: 5,
  },

  loginCard: {
    backgroundColor: COLORS.cream,
    marginHorizontal: 18,
    marginTop: -45,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.line,
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#F0E5CF',
    borderRadius: 10,
    padding: 4,
    marginBottom: 24,
  },

  activeTab: {
    flex: 1,
    backgroundColor: COLORS.red,
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: 'center',
  },

  activeTabText: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 13,
  },

  inactiveTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inactiveTabText: {
    color: COLORS.ink,
    fontWeight: '700',
    fontSize: 13,
  },

  title: {
    color: COLORS.ink,
    fontSize: 23,
    fontWeight: '900',
  },

  subtitle: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 6,
    marginBottom: 24,
  },

  fieldGroup: {
    marginBottom: 16,
  },

  label: {
    color: COLORS.ink,
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 7,
  },

  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 11,
    backgroundColor: COLORS.white,
    paddingHorizontal: 13,
    color: COLORS.ink,
    fontSize: 14,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 20,
    paddingVertical: 5,
  },

  forgotText: {
    color: COLORS.red,
    fontSize: 12,
    fontWeight: '700',
  },

  loginButton: {
    backgroundColor: COLORS.red,
    minHeight: 49,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 15,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.line,
    marginVertical: 22,
  },

  guestButton: {
    minHeight: 44,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },

  guestButtonText: {
    color: COLORS.ink,
    fontWeight: '700',
    fontSize: 13,
  },

  footerText: {
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 22,
  },
});
