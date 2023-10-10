export default function Button({ children, className }) {
  return (
    <button
      className={`inline-block text-base py-2 px-6 rounded-l-xl rounded-t-xl bg-primaryGreen hover:bg-secondaryGreen text-gray-50  leading-loose transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
