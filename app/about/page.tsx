interface AboutProps {
  children: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <main className="mt-0 h-screen bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <h1>Hello World! | About</h1>
    </main>
  );
};

export default About;
