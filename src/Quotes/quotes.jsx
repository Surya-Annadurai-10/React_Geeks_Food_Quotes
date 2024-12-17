import styles from './quotes.module.css'


const Quotes = (props) =>{
    // console.log(props);_vite
    
    return (
        <>
           <div className={styles.container}> 
                <h2>{props.quotes}</h2>
                <p>{props.author}</p>
           </div>
        </>
    )
}

export default Quotes;