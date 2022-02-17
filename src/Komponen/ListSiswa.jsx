const ListSiswa = ({nama})=> {
    if(nama === 'Dian'){
        return(
            <div>
                <ul>
                    <li>Nama : {nama}</li>
                    <li>Email : {nama}@gmail.com</li>
                </ul>
            </div>
        )
    } else if(nama === 'DN'){
        return(
            <div>
                <ul>
                    <li>Nama : {nama}</li>
                    <li>Email : {nama}@gmail.com</li>
                </ul>
            </div>
        )
    }
}

export default ListSiswa;