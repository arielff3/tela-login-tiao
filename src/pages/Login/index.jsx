import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section
      className="bg-[#0f0e17] h-screen w-screen bg-no-repeat bg-cover flex items-center justify-center"
    >
      <div className="h-[400px] bg-transparent w-[400px] p-[30px] flex flex-col shadow-xl">
        <h1 className="text-[35px] font-semibold text-[#e53170] text-center">Login</h1>
        <div className="flex-grow">
          <div className="flex flex-col gap-1 mb-4 mt-3">
            <label className="font-semibold text-[#fff]">Usuário</label>
            <input
              name="user"
              placeholder="Digite seu usuário"
              type="text"
              className="border px-2 h-[50px] rounded-md bg-[#0f0e17] text-[#fff] placeholder:text-[#fffffe]"
              onChange={(event) => {
                setUser(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-1 mb-1">
            <label className="font-semibold text-[#fff]">Senha</label>
            <input
              name="user"
              type="password"
              placeholder="Digite sua senha"
              className="border px-2 h-[50px] rounded-md bg-[#0f0e17] text-[#fff] placeholder:text-[#fffffe]"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={() => {
            console.log('Logica do server');
            console.log('user', user);
            console.log('password', password);
          }}
          type="button"
          className="w-full rounded-md h-[50px] bg-[#e53170] text-[#fff] transition-colors duration-200"
        >
          Entrar
        </button>
      </div>
    </section>
  );
};
