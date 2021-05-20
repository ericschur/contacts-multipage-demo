class UserLogged {
  id: string;
  userName: string;
  interactionsWithPageRout: number;


  constructor(name: string) {
    this.id = new Date().toISOString();
    this.userName = name ;
    this.interactionsWithPageRout = 0;
  }
}

export default UserLogged;