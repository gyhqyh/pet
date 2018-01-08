/**
 * Created by Administrator on 2018/1/8.
 */
import Mock from 'mockjs'
import data from './cities.json'

console.log('mockServer')

Mock.mock('/api2/sanji', data)
