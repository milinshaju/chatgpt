import { ChatBox } from '../../components/chatBox/ChatBox';
import { UserInputBox } from '../../components/userInputBox/UserInputBox';
import { Main } from '../../layout/main/Main';
import { Sidebar } from '../../layout/sidebar/Sidebar';

export const Home = () => {
  const msgs = [
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
  a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
      a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
      a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
    a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
      a type specimen book.`,
    },
    {
      name: 'You',
      msg: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
      a type specimen book.`,
    },
  ];
  return (
    <>
      <Sidebar />
      <Main>
        <h1 className="text-xl">ChatGPT</h1>
        <div className="flex flex-col justify-between grow overflow-auto">
          <div className="px-48 py-12">
            {msgs.map(({ name, msg }) => (
              <ChatBox name={name} msg={msg} />
            ))}
          </div>
        </div>
        <div className="px-24 w-full">
          <UserInputBox />
        </div>
      </Main>
    </>
  );
};
