import { app, firestore } from '../lib/firebase';
import { collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth(app);

const LoginEmailESenha = async (email, senha) => {
    const auth = getAuth();
  
    // Verificar se o email e senha são válidos antes de tentar fazer login
    if (!email || !senha) {
      throw new Error("Email e senha são obrigatórios.");
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, senha);
    } catch (error) {
      throw new Error("Email ou senha inválidos.");
    }
  };

  const getProfileData = async (userId) => {
    const profileRef = doc(collection(firestore, "profiles"), userId);
    const profileDoc = await getDoc(profileRef);
  
    if (profileDoc.exists()) {
      return profileDoc.data();
    } else {
      return null;
    }
  };
  
  // Função para atualizar os dados do perfil do usuário
  const updateProfileData = async (userId, updatedFields) => {
    const profileRef = doc(collection(firestore, "profiles"), userId);
    await updateDoc(profileRef, updatedFields);
  };

  const createDefaultProfile = async (userId: string) => {
    const defaultProfileData = {
      name: "Novo Usuário",
      age: null,
      location: null,
      interests: ["Viagens", "Aventura", "Cultura"],
      experiences: [
        {
          title: "Férias na praia",
          description: "Uma viagem relaxante para a praia, com muito sol e mar.",
          date: "2022-07-15",
        },
        {
          title: "Explorando as montanhas",
          description: "Uma aventura emocionante nas montanhas, com trilhas e vistas incríveis.",
          date: "2023-02-28",
        },
      ],
    };
  
  
    const profileRef = doc(collection(firestore, "profiles"), userId);
    await setDoc(profileRef, defaultProfileData);
  };

  const registrarEmaileSenha = async (email, senha) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const userId = userCredential.user.uid;
      console.log(userId);
      // Criar o perfil padrão para o novo usuário
      await createDefaultProfile(userId);
    } catch (error) {
      // Tratar erros
    }
  };

const logoutFirebase = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  };

export { auth, registrarEmaileSenha, LoginEmailESenha, updateProfileData, getProfileData, logoutFirebase }