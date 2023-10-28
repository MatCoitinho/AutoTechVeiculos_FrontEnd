export interface Response {
  token: string;
  user: {
    id: string,
    name: string,
    email: string,
    phone: string,
    cpf: string,
    address: string
  };
}

export interface ISignInCredentials {
  email: string;
  password: string;
}

function signIn(props: ISignInCredentials): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          id: "asdasd",
          name: 'Pedro',
          email: 'pedro@autotech.com',
          phone: '(44) 9 1234-5678',
          cpf: '123.456.789-10',
          address: 'Rua das Flores, 123'
        }
      });
    }, 2000);
  });
}

function getUserData(id: string): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          id: "asdasd",
          name: 'Pedro',
          email: 'pedro@autotech.com',
          phone: '(44) 9 1234-5678',
          cpf: '123.456.789-10',
          address: 'Rua das Flores, 123'
        }
      });
    }, 2000);
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { signIn, getUserData };