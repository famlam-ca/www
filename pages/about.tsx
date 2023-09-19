interface AboutProps {
  children: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return <main className="bg-black">Hello World! | About</main>;
};

export default About;
