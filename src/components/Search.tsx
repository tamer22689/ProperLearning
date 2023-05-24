import { Button, Input } from '@chakra-ui/react'
import './Search.css'
import './UserInfo.css'

const Search = () => {
  return (
    <div className='search'>
        <Input placeholder='search'/>
        <Button>search</Button>
      
    </div>
  )
}

export default Search
