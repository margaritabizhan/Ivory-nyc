import Image from "next/image"


export default function Home() {
  return (
    <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('https://images.unsplash.com/photo-1532467411038-57680e3dc0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          height: "650px",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
          overflow: "hidden",
          }}>
  
      <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}>

        <h3 className="text-[#5c4339] uppercase text-center">Welcome to</h3>
        <h1 className="text-[#5c4339] uppercase">Ivory</h1>
        <h6 className="text-[#5c4339] uppercase">Beauty Studio</h6>
      </div>
    </div>
  )
};

