import Navbar from "@/components/Navigation/Navbar";

const Servers = () => {
  return (
    <main className="mt-0 h-screen bg-gradient-to-br from-backgroundLight via-light to-backgroundLight dark:from-backgroundDark dark:via-backgroundVariant dark:to-backgroundDark">
      <Navbar />
      <iframe
        src="https://panel.famlam.ca"
        // seamless // no borders or scrollbars
        className="block h-calcNavbar w-full"
      />
    </main>
  );
};

export default Servers;
