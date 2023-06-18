import { Flex , Image as ChImage} from "@chakra-ui/react"


function Image() {
  return (
        <Flex width={'100%'} height={'400px'} justifyContent={'center'}>
            <ChImage 
            src='src\assets\images\backgrounds\proper-Learning-9.jpg' alt=''
            width={'500px'}
            height={'400px'}/>
        </Flex>
    
  )
}

export default Image
