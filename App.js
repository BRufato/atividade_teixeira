import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from "axios";
import { App as Dashboard } from "./Dashboard";

function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const [abrirDashboard, setAbrirDashboard] = useState(false);

  if (abrirDashboard) {
    return <Dashboard />;
  }

  const entrar = () => {
    axios.post("http://localhost:3333/save", {
      usuario: usuario,
      senha: senha
  })
  .then((response) => {
    console.log("Salvo:", response.data);
    alert("Usuário salvo com sucesso!");
  })
  .catch((error) => {
    console.error(error);
    alert("Erro ao salvar!");
  });
  };
  
  return (
    <div style={{ width: 300, margin: "100px auto" }}>
      <TextField
        fullWidth
        label="Usuário"
        margin="normal"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <TextField
        fullWidth
        label="Senha"
        type="password"
        margin="normal"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      
      <Button fullWidth variant="contained" onClick={() => setAbrirDashboard(true)}>
        Entrar
      </Button>
    </div>
  );
}

export default App;