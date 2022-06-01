// import React, {useEffect, useState} from "react"
// import usersCss from "./users.module.css"
// import face from "../head/img/user.png"
// import * as api from "../../api/api"
//
// const UsersList = (props) => {
//
// 	const [id, setId] = useState(undefined)
// 	const [searchValue, setSearchValue] = useState("")
// 	const [searchPeople, setSearchPeople] = useState([])
// 	const [modeSearch, setModeSearch] = useState(true)
//
//
// // эффект при вводе символа в поисковой строке:
// 	useEffect(() => searchValue !== '' ?
// 		api.getSearchUsers(1, searchValue).then(data => {
// 			setSearchPeople(data.newUsers)
// 			data.newUsers.length === 0 ? setModeSearch(false) : setModeSearch(true)
// 		})
// 		:
// 		setModeSearch(false), [searchValue])
//
// 	return <div>
//
// 		{/*строка поиска*/}
// 		<input onChange={(e) => setSearchValue(e.target.value)}
// 			   value={searchValue}
// 			   placeholder={"Найти..."}
// 		/><p/>
//
// 		{modeSearch ?
//
// 			// режим поиска юзера
// 			searchPeople.map((u, i) =>
// 				<div key={i}>
// 					<div className={usersCss.item1}>
// 						<img className={usersCss.photo}
// 							 src={u.photo}
// 							 onError={e => {
// 								 e.target.src = face
// 								 e.target.onerror = null
// 							 }}
// 							 alt=""
// 						/>
// 						{u.name}
//
// 						{/* + - добавить подписчика*/}
// 						<button
// 							className={usersCss.button}
// 							onClick={() => {
// 								api.setFollow(u.id, true).then((data) => {
// 									console.log(data)
// 									if (data.result) {
// 										let newUsers = []
// 										let incrementUser = u.id
//
// 										props.setUsers(prev => {
// 											return [...prev, {
// 												id: u.id,
// 												photo: u.photo,
// 												name: u.name,
// 												messages: {
// 													allMessages: data.messages.allMessages,
// 													counterLastMessage: data.messages.counterLastMessage,
// 													lengthMessages: data.messages.lengthMessages
// 												}
// 											}]
// 										})
// 										searchPeople.map(u => {
// 											if (u.id !== incrementUser) {
// 												newUsers.push(u)
// 											}
// 											return newUsers
// 										})
// 										setSearchPeople(newUsers)
// 										props.setAuthorizeCountUsers(pre => pre + 1)
//
// 									} else {
// 										alert("Вы уже подписаны")
// 									}
//
// 								})
// 							}}
// 						>+
// 						</button>
// 					</div>
// 				</div>
// 			)
// 			:
//
// 			// режим общения с подписчиками:
// 			props.users.map(u =>
// 				<div onMouseLeave={() => setId(undefined)}
// 					 className={(props.clickUser === u.id) ? usersCss.clickUser : (id === u.id) ? usersCss.dark : ""}
// 					 key={u.id}>
// 					<div className={usersCss.item}>
// 						<div onClick={() => {
// 							if (props.clickUser !== u.id) {
// 								props.setClickUser(u.id)
// 							}
// 						}}
// 							 onMouseEnter={() => setId(u.id)}
// 							 className={usersCss.item1}>
// 							<div>
//
// 								<img className={usersCss.photo}
// 									 src={u.photo}
// 									 alt=''
// 									 onError={e => {
// 										 e.target.src = face
// 										 e.target.onerror = null
// 									 }}
// 								/>
//
// 							</div>
// 							<div>
// 								<div>{u.name}</div>
//
// 								{props.usersConnection.includes(u.id) ? <div>В сети</div> : <></>}
//
// 								{u.messages.allMessages[u.messages.allMessages.length - 1].post ?
// 									<div
// 										className={usersCss.item1122}>{u.messages.allMessages[u.messages.allMessages.length - 1].fromId === props.authorizeId ? "Я:" : ""} {u.messages.allMessages[u.messages.allMessages.length - 1].post}</div>
// 									:
// 									<div className={usersCss.item1122}>Нет сообщений</div>}
// 							</div>
//
// 							<div
// 								className={usersCss.item1123}>{
// 								props.clickUser!==u.id?
// 									u.messages.lengthMessages - u.messages.counterLastMessage > 0 ? u.messages.lengthMessages - u.messages.counterLastMessage : ''
// 									:
// 									""
// 							}</div>
//
//
// 						</div>
//
// 						{/*{ х - удаление подписчика}*/}
// 						{(id === u.id) ? <button className={usersCss.button}
// 												 onClick={() => {
// 													 api.setFollow(u.id, false).then(() => {
// 														 let newUsers = []
// 														 let decrementUser = u.id
// 														 props.users.map(u => {
// 															 if (u.id !== decrementUser) {
// 																 newUsers.push(u)
// 															 }
// 															 return newUsers
// 														 })
// 														 props.setUsers(newUsers)
// 														 props.setAuthorizeCountUsers(pre => pre - 1)
// 													 })
// 												 }}
// 						>X</button> : <></>}
// 					</div>
// 				</div>)
// 		}
// 		<p/>
//
// 		{/*кнопка показать ещё:*/}
// 		{modeSearch ? <></>
// 			:
// 			((Math.ceil(props.authorizeCountUsers / 5)) > props.currentPage) ? <div onClick={() => {
// 				props.setCurrentPage(per => per + 1)
// 			}}> еще...</div> : <></>
// 		}
//
// 	</div>
// }
//
// export default UsersList


import React, {useState} from "react"
import usersCss from "./users.module.css"
import face from "../head/img/user.png"
import * as api from "../../api/api"
import search from "../users/img/search.png"
import error from "../users/img/error.png"

const UsersList = (props) => {

    const [id, setId] = useState(undefined)
    const [searchValue, setSearchValue] = useState("")
    const [searchPeople, setSearchPeople] = useState([])
    const [modeSearch, setModeSearch] = useState(false)

    return <div>

        {/*строка поиска*/}
        <input onChange={(e) => setSearchValue(e.target.value)}
               value={searchValue}
               placeholder={"Найти..."}
        />
        <img className={usersCss.buttonSearch}
             src={modeSearch === true ? error : search}

			 onClick={() => {
             	if (!modeSearch) { api.getSearchUsers(1, searchValue).then(data => {
					setModeSearch(true)
					setSearchPeople(data.newUsers)
				})}

				 if (modeSearch){setModeSearch(false)}

             }}
         alt={""}/>
        <p/>

        {modeSearch ?

            // режим поиска юзера

            searchPeople.map((u, i) =>
                <div key={i}>
                    <div className={usersCss.item1}>
                        <img className={usersCss.photo}
                             src={u.photo}
                             onError={e => {
                                 e.target.src = face
                                 e.target.onerror = null
                             }}
                             alt=""
                        />
                        {u.name}

                        {/* + - добавить подписчика*/}
                        <button
                            className={usersCss.button}
                            onClick={() => {
                                api.setFollow(u.id, true).then((data) => {
                                    console.log(data)
                                    if (data.result) {
                                        let newUsers = []
                                        let incrementUser = u.id

                                        props.setUsers(prev => {
                                            return [...prev, {
                                                id: u.id,
                                                photo: u.photo,
                                                name: u.name,
                                                messages: {
                                                    allMessages: data.messages.allMessages,
                                                    counterLastMessage: data.messages.counterLastMessage,
                                                    lengthMessages: data.messages.lengthMessages
                                                }
                                            }]
                                        })
                                        searchPeople.map(u => {
                                            if (u.id !== incrementUser) {
                                                newUsers.push(u)
                                            }
                                            return newUsers
                                        })
                                        setSearchPeople(newUsers)
                                        props.setAuthorizeCountUsers(pre => pre + 1)

                                    } else {
                                        alert("Вы уже подписаны")
                                    }

                                })
                            }}
                        >+
                        </button>
                    </div>
                </div>
            )


            :

            // режим общения с подписчиками:
            props.users.map(u =>
                <div onMouseLeave={() => setId(undefined)}
                     className={(props.clickUser === u.id) ? usersCss.clickUser : (id === u.id) ? usersCss.dark : ""}
                     key={u.id}>
                    <div className={usersCss.item}>
                        <div onClick={() => {
                            if (props.clickUser !== u.id) {
                                props.setClickUser(u.id)
                            }
                        }}
                             onMouseEnter={() => setId(u.id)}
                             className={usersCss.item1}>
                            <div>

                                <img className={usersCss.photo}
                                     src={u.photo}
                                     alt=''
                                     onError={e => {
                                         e.target.src = face
                                         e.target.onerror = null
                                     }}
                                />

                            </div>
                            <div>
                                <div>{u.name}</div>

                                {props.usersConnection.includes(u.id) ? <div>В сети</div> : <></>}

                                {u.messages.allMessages[u.messages.allMessages.length - 1].post ?
                                    <div
                                        className={usersCss.item1122}>{u.messages.allMessages[u.messages.allMessages.length - 1].fromId === props.authorizeId ? "Я:" : ""} {u.messages.allMessages[u.messages.allMessages.length - 1].post}</div>
                                    :
                                    <div className={usersCss.item1122}>Нет сообщений</div>}
                            </div>

                            <div
                                className={usersCss.item1123}>{
                                props.clickUser !== u.id ?
                                    u.messages.lengthMessages - u.messages.counterLastMessage > 0 ? u.messages.lengthMessages - u.messages.counterLastMessage : ''
                                    :
                                    ""
                            }</div>


                        </div>

                        {/*{ х - удаление подписчика}*/}
                        {(id === u.id) ? <button className={usersCss.button}
                                                 onClick={() => {
                                                     api.setFollow(u.id, false).then(() => {
                                                         let newUsers = []
                                                         let decrementUser = u.id
                                                         props.users.map(u => {
                                                             if (u.id !== decrementUser) {
                                                                 newUsers.push(u)
                                                             }
                                                             return newUsers
                                                         })
                                                         props.setUsers(newUsers)
                                                         props.setAuthorizeCountUsers(pre => pre - 1)
                                                     })
                                                 }}
                        >X</button> : <></>}
                    </div>
                </div>)
        }
        <p/>

        {/*кнопка показать ещё:*/}
        {modeSearch ? <></>
            :
            ((Math.ceil(props.authorizeCountUsers / 5)) > props.currentPage) ? <div onClick={() => {
                props.setCurrentPage(per => per + 1)
            }}> еще...</div> : <></>
        }

    </div>
}

export default UsersList