import {CreateDateColumn,UpdateDateColumn,DeleteDateColumn} from 'typeorm'

export  class TimestampEntity{

    @CreateDateColumn({update:false})
    createAt:Date;
    @UpdateDateColumn()
    updateAt:Date;
    @DeleteDateColumn()
    deleteAt:Date;
}