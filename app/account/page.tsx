import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";

const Account = () => {
    return (
        <div className='h-full w-full overflow-hidden overflow-y-auto bg-neutral-900'>
      <Header className="from-bg-neutral-900">
     <div className="mb-2 flex flex-cil gap-y-6">
     <h1 className='text-white text-3xl font-semibold'>
    Account Settings 
     </h1>
     </div>
      </Header>
      <AccountContent/>
        </div>
    )
}

export default Account;