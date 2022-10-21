//Page for online resources where the online resources are dispayed 
import React from 'react'
import SideBar from '../components/SideBar';

function OnlineResources() {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div>
        <SideBar/>
    <div className='wrapper3'>
        
        <header>
            <h1>Online Resources</h1>
        </header>
        <div class="videos">
            <h2>Videos</h2>
        </div>
        <div className='link1'>
            <button className='but1' onClick={() => openInNewTab('https://www.youtube.com/watch?v=p60rN9JEapg')}>
                <span>The best scientific study tips</span>
            </button>
        </div>
        <div className='link2'>
            <button className='but1' onClick={() => openInNewTab('https://www.youtube.com/watch?v=76yqErAib5g')}>
                <span>How I Ranked 1st at Cambridge University - 20 Study Tips</span>
            </button>
        </div>
        <div className='link3'>
            <button className='but1' onClick={() => openInNewTab('https://www.youtube.com/watch?v=Dezbvv2NIlQ')}>
                <span>How I Trained Myself to Study Long Hours (Even When I Don't Want To)</span>
            </button>
        </div>
        <div class="podcasts">
            <h2>Podcasts</h2>
        </div>
        <div className='link4'>
            <button className='but1' onClick={() => openInNewTab('https://open.spotify.com/episode/1AFhJ5lPtWqpRPor6EPHP7?go=1&sp_cid=1c2bb829f6bfbcd199276d3cc3f30451&utm_source=embed_player_p&utm_medium=desktop&nd=1')}>
                <span>The Tim Ferris Show</span>
            </button>
        </div>
        <div className='link5'>
            <button className='but1' onClick={() => openInNewTab('https://open.spotify.com/episode/216WqLAHGG5iTLvvhUnElq?go=1&sp_cid=1c2bb829f6bfbcd199276d3cc3f30451&utm_source=embed_player_p&utm_medium=desktop&nd=1')}>
                <span>Happier with Gretchen Rubin</span>
            </button>
        </div>
        <div className="link6">
            <button className='but1' onClick={() => openInNewTab('https://open.spotify.com/episode/091F7dRxWC2WZAEnCnkCDX?go=1&sp_cid=1c2bb829f6bfbcd199276d3cc3f30451&utm_source=embed_player_p&utm_medium=desktop&nd=1')}>
                <span>Hidden Brain</span>
            </button>
        </div>
    </div>
    </div>
  )
}

export default OnlineResources