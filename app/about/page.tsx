import Navbar from "@/components/Navigation/Navbar";

const About = () => {
  return (
    <main className="mt-0 h-screen bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <Navbar />
      <h1 className="text-center">Hello World! | About</h1>
    </main>
  );
};

export default About;
