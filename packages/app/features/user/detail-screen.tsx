"use client"
import { TextLink } from 'solito/link'
import { Text, View } from 'react-native'

import { useParams } from 'solito/navigation'
type Params = { id: string; } 

const UserDetailScreen = () => {
  const {id} = useParams<Params>()

  return (
    <View className="flex-1 items-center justify-center bg-violet-300">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}


export default UserDetailScreen