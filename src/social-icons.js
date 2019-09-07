import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const social = [
  { name: 'fb', icon: `<path d="M9.19264 15.9999V8.70155H11.5513L11.9044 5.85726H9.19264V4.04126C9.19264 3.21779 9.41283 2.65655 10.5499 2.65655L12 2.65585V0.111955C11.7491 0.0774178 10.8883 0 9.88691 0C7.79614 0 6.36475 1.32545 6.36475 3.75971V5.85733H4V8.70163H6.36467V16L9.19264 15.9999Z"/>`},
  { name: 'ok', icon: `<path d="M7.99989 2.42008C8.9155 2.42008 9.66028 3.18698 9.66028 4.12979C9.66028 5.07182 8.91531 5.83871 7.99989 5.83871C7.08485 5.83871 6.33989 5.07182 6.33989 4.12979C6.33969 3.18678 7.08505 2.42008 7.99989 2.42008ZM7.99989 8.25761C10.2116 8.25761 12.0102 6.40618 12.0102 4.12979C12.0102 1.85222 10.2118 0 7.99989 0C5.78841 0 3.98963 1.85242 3.98963 4.12979C3.98963 6.40618 5.78841 8.25761 7.99989 8.25761ZM9.62227 11.6258C10.4472 11.4324 11.2345 11.0967 11.9508 10.633C12.2145 10.4622 12.4015 10.1905 12.4707 9.87766C12.5398 9.56484 12.4855 9.23656 12.3196 8.96502C12.2375 8.83043 12.1305 8.71382 12.0047 8.62185C11.8788 8.52989 11.7366 8.46437 11.5861 8.42905C11.4356 8.39373 11.2799 8.3893 11.1278 8.41601C10.9756 8.44273 10.8301 8.50006 10.6995 8.58473C9.05659 9.64831 6.94204 9.64752 5.30047 8.58473C5.16989 8.50004 5.02438 8.44269 4.87226 8.41596C4.72014 8.38924 4.5644 8.39366 4.41394 8.42899C4.26348 8.46431 4.12127 8.52983 3.99543 8.62181C3.86959 8.71379 3.7626 8.83041 3.68058 8.96502C3.51462 9.23649 3.46018 9.56472 3.52922 9.87752C3.59826 10.1903 3.78514 10.4621 4.04875 10.633C4.76501 11.0965 5.55213 11.4322 6.37693 11.6258L4.13512 13.9346C3.91482 14.1616 3.79108 14.4693 3.79113 14.7902C3.79119 15.1111 3.91503 15.4188 4.13541 15.6456C4.3558 15.8725 4.65467 15.9999 4.96629 15.9999C5.27791 15.9998 5.57674 15.8723 5.79705 15.6453L7.99951 13.3771L10.2033 15.6455C10.3123 15.7579 10.4417 15.8471 10.5841 15.9079C10.7266 15.9687 10.8793 16 11.0335 16C11.1877 16 11.3404 15.9687 11.4829 15.9079C11.6253 15.8471 11.7547 15.7579 11.8637 15.6455C11.973 15.5334 12.0597 15.4001 12.1189 15.2533C12.178 15.1065 12.2085 14.9492 12.2085 14.7903C12.2085 14.6314 12.178 14.474 12.1189 14.3273C12.0597 14.1805 11.973 14.0472 11.8637 13.935L9.62227 11.6258Z"/>`},
  { name: 'vk', icon: `<path d="M15.6329 4.6094C15.7442 4.25816 15.6329 4 15.1035 4H13.3531C12.908 4 12.703 4.22299 12.5917 4.46895C12.5917 4.46895 11.7015 6.52391 10.4404 7.85875C10.0325 8.24516 9.84705 8.36796 9.6245 8.36796C9.51322 8.36796 9.35218 8.24516 9.35218 7.89392V4.6094C9.35218 4.18782 9.22303 4 8.85207 4H6.10142C5.82336 4 5.65607 4.19563 5.65607 4.38108C5.65607 4.78075 6.28647 4.87288 6.35148 5.99693V8.43842C6.35148 8.97368 6.24946 9.07079 6.02691 9.07079C5.43352 9.07079 3.99018 7.00647 3.13398 4.64457C2.96619 4.18545 2.7979 4 2.35055 4H0.60014C0.100023 4 0 4.22299 0 4.46895C0 4.90805 0.593513 7.08605 2.76314 9.96653C4.20973 11.9335 6.24746 13 8.10189 13C9.21465 13 9.35218 12.7632 9.35218 12.3552V10.8684C9.35218 10.3947 9.45758 10.3002 9.80979 10.3002C10.0696 10.3002 10.5146 10.4232 11.5532 11.3716C12.74 12.4955 12.9355 13 13.6032 13H15.3536C15.8537 13 16.1038 12.7632 15.9595 12.2957C15.8017 11.8299 15.2351 11.1542 14.4831 10.3529C14.0752 9.89618 13.4631 9.40438 13.2779 9.15854C13.0182 8.84235 13.0923 8.70191 13.2779 8.42101C13.2779 8.42101 15.4103 5.57559 15.6329 4.60951V4.6094Z"/>`},
  { name: 'tw', icon: `<path d="M14.3874 5.24477C14.3874 5.3913 14.3874 5.53784 14.3874 5.66345C14.3874 9.99678 11.0785 15 5.04712 15C3.18325 15 1.46597 14.4557 0 13.5346C0.251309 13.5556 0.52356 13.5765 0.774869 13.5765C2.30366 13.5765 3.72775 13.0531 4.85864 12.1739C3.41361 12.153 2.19895 11.19 1.80105 9.89211C2.01047 9.93398 2.19895 9.95491 2.42932 9.95491C2.72251 9.95491 3.01571 9.91304 3.28796 9.82931C1.7801 9.53623 0.649215 8.21739 0.649215 6.62641C0.649215 6.60547 0.649215 6.60547 0.649215 6.58454C1.08901 6.83575 1.59162 6.98229 2.13613 7.00322C1.25654 6.41707 0.670157 5.41224 0.670157 4.26087C0.670157 3.65378 0.837696 3.08857 1.10995 2.60709C2.72251 4.59581 5.15183 5.89372 7.87435 6.04026C7.81152 5.80998 7.79058 5.53784 7.79058 5.28663C7.79058 3.46538 9.25654 2 11.0785 2C12.0209 2 12.8796 2.39775 13.466 3.02576C14.2199 2.87923 14.911 2.60709 15.5602 2.23027C15.3089 3.00483 14.7853 3.63285 14.1152 4.05153C14.7853 3.96779 15.4136 3.80032 16 3.52818C15.5812 4.19807 15.0366 4.78422 14.3874 5.24477Z"/>`},
  { name: 'yt', icon: `<path d="M12.8419 11.7035H11.92L11.9243 11.1934C11.9243 10.9668 12.1197 10.7813 12.3585 10.7813H12.4173C12.6566 10.7813 12.8526 10.9668 12.8526 11.1934L12.8419 11.7035ZM9.38376 10.6105C9.14987 10.6105 8.95853 10.7602 8.95853 10.9435V13.424C8.95853 13.6069 9.14987 13.7563 9.38376 13.7563C9.61859 13.7563 9.81011 13.6069 9.81011 13.424V10.9435C9.81011 10.76 9.61859 10.6105 9.38376 10.6105ZM15 9.22293V13.9419C15 15.0738 13.9694 16 12.7096 16H3.29059C2.0304 16 1 15.0738 1 13.9419V9.22293C1 8.09102 2.0304 7.16462 3.29059 7.16462H12.7096C13.9694 7.16462 15 8.09102 15 9.22293ZM3.91891 14.4542L3.91816 9.48338L5.08576 9.48373V8.7472L1.97328 8.74276V9.46684L2.94488 9.46951V14.4542H3.91891ZM7.41891 10.2238H6.44544V12.8782C6.44544 13.2622 6.46989 13.4542 6.44395 13.522C6.3648 13.7278 6.00901 13.9465 5.87032 13.5442C5.8468 13.4738 5.86752 13.2613 5.86715 12.8965L5.86323 10.2238H4.89517L4.89816 12.8546C4.89891 13.2578 4.88864 13.5584 4.90152 13.6953C4.92523 13.9365 4.91683 14.2178 5.15184 14.3785C5.58976 14.6789 6.4292 14.3337 6.6392 13.9042L6.63733 14.4523L7.41909 14.4532L7.41891 10.2238ZM10.5331 13.2635L10.531 11.0542C10.5303 10.2123 9.86891 9.70809 8.97123 10.3893L8.97515 8.74684L8.0028 8.74827L7.99813 14.4176L8.79781 14.4066L8.87061 14.0535C9.89224 14.9461 10.5346 14.3344 10.5331 13.2635ZM13.5797 12.9707L12.8498 12.9744C12.8494 13.002 12.8483 13.0338 12.8479 13.0684V13.4564C12.8479 13.664 12.6678 13.8331 12.449 13.8331H12.306C12.0869 13.8331 11.9067 13.664 11.9067 13.4564V12.4361H13.5782V11.837C13.5782 11.3991 13.5664 10.9614 13.5283 10.7111C13.4087 9.91929 12.2416 9.7936 11.6521 10.1989C11.4671 10.3255 11.3258 10.4949 11.2437 10.7225C11.1608 10.9502 11.1196 11.2613 11.1196 11.6565V12.9739C11.1199 15.1637 13.9129 14.8542 13.5797 12.9707ZM9.83549 5.81902C9.88571 5.93529 9.96373 6.02951 10.0696 6.10062C10.1741 6.17067 10.3078 6.20587 10.4679 6.20587C10.6083 6.20587 10.7326 6.16978 10.8409 6.09529C10.9488 6.02116 11.0397 5.9104 11.114 5.76267L11.0955 6.1264H12.1806V1.73156H11.3264V5.152C11.3264 5.33724 11.1662 5.48889 10.9704 5.48889C10.7757 5.48889 10.615 5.33724 10.615 5.152V1.73156H9.72349V4.69582C9.72349 5.07342 9.73077 5.32516 9.74253 5.4528C9.75467 5.57956 9.78528 5.70116 9.83549 5.81902ZM6.54717 3.33689C6.54717 2.91502 6.58413 2.5856 6.65749 2.34809C6.73141 2.11147 6.86413 1.92124 7.0564 1.77778C7.24811 1.6336 7.49357 1.56142 7.79205 1.56142C8.04312 1.56142 8.25816 1.60836 8.43773 1.70027C8.61824 1.79271 8.75749 1.91271 8.854 2.0608C8.95237 2.20942 9.0192 2.36213 9.05485 2.5184C9.09125 2.6768 9.10917 2.91573 9.10917 3.23804V4.34951C9.10917 4.75716 9.092 5.05707 9.05859 5.24747C9.02555 5.4384 8.95461 5.61547 8.84467 5.78151C8.7364 5.94578 8.59659 6.06862 8.42709 6.14702C8.25573 6.22613 8.05973 6.26489 7.83835 6.26489C7.59101 6.26489 7.38269 6.23236 7.21096 6.16444C7.03867 6.09689 6.90557 5.99502 6.81075 5.85973C6.71499 5.72427 6.6476 5.55929 6.60691 5.36693C6.56603 5.17476 6.54661 4.88569 6.54661 4.50044L6.54717 3.33689ZM7.39707 5.08267C7.39707 5.33156 7.59157 5.53476 7.82845 5.53476C8.06552 5.53476 8.25928 5.33156 8.25928 5.08267V2.74311C8.25928 2.49458 8.06552 2.29138 7.82845 2.29138C7.59157 2.29138 7.39707 2.49458 7.39707 2.74311V5.08267ZM4.39397 6.264H5.41765L5.41877 2.89333L6.62837 0.00586667H5.50875L4.86568 2.15058L4.21347 0H3.10541L4.39229 2.89493L4.39397 6.264Z"/>`},
]
const Icon = props => {

  const res = social.filter(item => item.name === props.icon)
  const icon = res[0].icon
  return(
    <svg width='16' height='16' viewBox="0 0 16 16" fill="#FBFCFD">
      {ReactHtmlParser(icon)}
    </svg>
  )
}

export default Icon;
