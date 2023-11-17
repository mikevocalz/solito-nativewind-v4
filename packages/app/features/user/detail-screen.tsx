import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text, View } from 'react-native'
const { useParam } = createParam<{ id: string }>()

const UserDetailScreen = () => {
  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center bg-violet-300">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}


export default UserDetailScreen