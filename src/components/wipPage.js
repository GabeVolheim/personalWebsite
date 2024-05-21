const wip = () => {
    return(
        <div className="min-h-screen flex items-center justify-center text-center bg-slate-800 text-white font-bebas">
        <div>
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-gray-300 mx-auto mb-6"></div>
          <h1 className="text-4xl font-bold mb-4">Work in Progress</h1>
          <p className="text-lg mb-4">I am currently working hard on this page. Please check back later!</p>
          <a href="/" className="mt-6 inline-block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Go Back to Home</a>
        </div>
      </div>
      
    );
};

export default wip();