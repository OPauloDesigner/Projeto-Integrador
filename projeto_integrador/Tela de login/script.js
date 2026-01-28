// ========== IMPORTS DO FIREBASE ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ========== CONFIGURAÇÃO DO FIREBASE ==========
// Configure suas credenciais do Firebase aqui
const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ========== BOTÃO DE VOLTAR ==========
document.getElementById('btn-voltar').addEventListener('click', () => {
    window.history.back();
    // Ou redirecione para uma página específica:
    // window.location.href = 'index.html';
});

// ========== LOGIN COM GOOGLE ==========
window.loginGoogle = function () {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`✅ Logado com sucesso!\n\nBem-vindo, ${user.displayName}!\nEmail: ${user.email}`);
            // Redirecione para a página principal
            // window.location.href = '/dashboard.html';
        })
        .catch((error) => {
            console.error('Erro no login Google:', error);
            alert(`❌ Erro ao fazer login com Google:\n${error.message}`);
        });
};

// ========== LOGIN COM FACEBOOK ==========
window.loginFacebook = function () {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert(`✅ Logado com sucesso!\n\nBem-vindo, ${user.displayName}!\nEmail: ${user.email}`);
            // Redirecione para a página principal
            // window.location.href = '/dashboard.html';
        })
        .catch((error) => {
            console.error('Erro no login Facebook:', error);
            alert(`❌ Erro ao fazer login com Facebook:\n${error.message}`);
        });
};

// ========== LOGIN COM EMAIL/SENHA ==========
window.entrar = function () {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!email || !senha) {
        alert('⚠️ Por favor, preencha todos os campos!');
        return;
    }

    signInWithEmailAndPassword(auth, email, senha)
        .then((result) => {
            const user = result.user;
            alert(`✅ Login realizado com sucesso!\n\nBem-vindo, ${user.email}!`);
            // Redirecione para a página principal
            // window.location.href = '/dashboard.html';
        })
        .catch((error) => {
            console.error('Erro no login:', error);
            
            let mensagem = 'Erro ao fazer login. Verifique suas credenciais.';
            
            if (error.code === 'auth/user-not-found') {
                mensagem = 'Usuário não encontrado.';
            } else if (error.code === 'auth/wrong-password') {
                mensagem = 'Senha incorreta.';
            } else if (error.code === 'auth/invalid-email') {
                mensagem = 'Email inválido.';
            }
            
            alert(`❌ ${mensagem}`);
        });
};