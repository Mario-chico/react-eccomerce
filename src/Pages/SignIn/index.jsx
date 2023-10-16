

function SignIn() {
  return (
    <>
      <h1 className="mt-24">Bienvenuti</h1>
      <form action="" className="flex flex-col w-60 h-80">
        <label className="text-lg mb-2" htmlFor="">username</label>
        <input className=" border-2 border-solid border-lime-400 rounded-lg text-lg p-1 mb-2" placeholder="username" type="email" name="" id="" />
        <label className="text-lg mb-2" htmlFor="">password</label>
        <input className="mb-2 border-2 border-solid border-lime-400 rounded-lg text-lg p-1" placeholder="password" type="password" name="" id="" />
        <input className="bg-orange-300 text-white rounded-lg p-1 mb-2 text-center text-lg mt-2" placeholder="subir" name="" id="" />
      </form>
    </>
  );
}

export { SignIn };