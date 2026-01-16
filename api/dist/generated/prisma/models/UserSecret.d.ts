import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserSecretModel = runtime.Types.Result.DefaultSelection<Prisma.$UserSecretPayload>;
export type AggregateUserSecret = {
    _count: UserSecretCountAggregateOutputType | null;
    _avg: UserSecretAvgAggregateOutputType | null;
    _sum: UserSecretSumAggregateOutputType | null;
    _min: UserSecretMinAggregateOutputType | null;
    _max: UserSecretMaxAggregateOutputType | null;
};
export type UserSecretAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type UserSecretSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type UserSecretMinAggregateOutputType = {
    id: number | null;
    userId: number | null;
    hPassword: string | null;
};
export type UserSecretMaxAggregateOutputType = {
    id: number | null;
    userId: number | null;
    hPassword: string | null;
};
export type UserSecretCountAggregateOutputType = {
    id: number;
    userId: number;
    hPassword: number;
    _all: number;
};
export type UserSecretAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type UserSecretSumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type UserSecretMinAggregateInputType = {
    id?: true;
    userId?: true;
    hPassword?: true;
};
export type UserSecretMaxAggregateInputType = {
    id?: true;
    userId?: true;
    hPassword?: true;
};
export type UserSecretCountAggregateInputType = {
    id?: true;
    userId?: true;
    hPassword?: true;
    _all?: true;
};
export type UserSecretAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSecretWhereInput;
    orderBy?: Prisma.UserSecretOrderByWithRelationInput | Prisma.UserSecretOrderByWithRelationInput[];
    cursor?: Prisma.UserSecretWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserSecretCountAggregateInputType;
    _avg?: UserSecretAvgAggregateInputType;
    _sum?: UserSecretSumAggregateInputType;
    _min?: UserSecretMinAggregateInputType;
    _max?: UserSecretMaxAggregateInputType;
};
export type GetUserSecretAggregateType<T extends UserSecretAggregateArgs> = {
    [P in keyof T & keyof AggregateUserSecret]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserSecret[P]> : Prisma.GetScalarType<T[P], AggregateUserSecret[P]>;
};
export type UserSecretGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSecretWhereInput;
    orderBy?: Prisma.UserSecretOrderByWithAggregationInput | Prisma.UserSecretOrderByWithAggregationInput[];
    by: Prisma.UserSecretScalarFieldEnum[] | Prisma.UserSecretScalarFieldEnum;
    having?: Prisma.UserSecretScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserSecretCountAggregateInputType | true;
    _avg?: UserSecretAvgAggregateInputType;
    _sum?: UserSecretSumAggregateInputType;
    _min?: UserSecretMinAggregateInputType;
    _max?: UserSecretMaxAggregateInputType;
};
export type UserSecretGroupByOutputType = {
    id: number;
    userId: number | null;
    hPassword: string;
    _count: UserSecretCountAggregateOutputType | null;
    _avg: UserSecretAvgAggregateOutputType | null;
    _sum: UserSecretSumAggregateOutputType | null;
    _min: UserSecretMinAggregateOutputType | null;
    _max: UserSecretMaxAggregateOutputType | null;
};
type GetUserSecretGroupByPayload<T extends UserSecretGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserSecretGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserSecretGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserSecretGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserSecretGroupByOutputType[P]>;
}>>;
export type UserSecretWhereInput = {
    AND?: Prisma.UserSecretWhereInput | Prisma.UserSecretWhereInput[];
    OR?: Prisma.UserSecretWhereInput[];
    NOT?: Prisma.UserSecretWhereInput | Prisma.UserSecretWhereInput[];
    id?: Prisma.IntFilter<"UserSecret"> | number;
    userId?: Prisma.IntNullableFilter<"UserSecret"> | number | null;
    hPassword?: Prisma.StringFilter<"UserSecret"> | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type UserSecretOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    hPassword?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type UserSecretWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId?: number;
    AND?: Prisma.UserSecretWhereInput | Prisma.UserSecretWhereInput[];
    OR?: Prisma.UserSecretWhereInput[];
    NOT?: Prisma.UserSecretWhereInput | Prisma.UserSecretWhereInput[];
    hPassword?: Prisma.StringFilter<"UserSecret"> | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "userId">;
export type UserSecretOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    hPassword?: Prisma.SortOrder;
    _count?: Prisma.UserSecretCountOrderByAggregateInput;
    _avg?: Prisma.UserSecretAvgOrderByAggregateInput;
    _max?: Prisma.UserSecretMaxOrderByAggregateInput;
    _min?: Prisma.UserSecretMinOrderByAggregateInput;
    _sum?: Prisma.UserSecretSumOrderByAggregateInput;
};
export type UserSecretScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserSecretScalarWhereWithAggregatesInput | Prisma.UserSecretScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserSecretScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserSecretScalarWhereWithAggregatesInput | Prisma.UserSecretScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"UserSecret"> | number;
    userId?: Prisma.IntNullableWithAggregatesFilter<"UserSecret"> | number | null;
    hPassword?: Prisma.StringWithAggregatesFilter<"UserSecret"> | string;
};
export type UserSecretCreateInput = {
    hPassword: string;
    user?: Prisma.UserCreateNestedOneWithoutUserSecretInput;
};
export type UserSecretUncheckedCreateInput = {
    id?: number;
    userId?: number | null;
    hPassword: string;
};
export type UserSecretUpdateInput = {
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneWithoutUserSecretNestedInput;
};
export type UserSecretUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserSecretCreateManyInput = {
    id?: number;
    userId?: number | null;
    hPassword: string;
};
export type UserSecretUpdateManyMutationInput = {
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserSecretUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserSecretListRelationFilter = {
    every?: Prisma.UserSecretWhereInput;
    some?: Prisma.UserSecretWhereInput;
    none?: Prisma.UserSecretWhereInput;
};
export type UserSecretOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserSecretCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    hPassword?: Prisma.SortOrder;
};
export type UserSecretAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserSecretMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    hPassword?: Prisma.SortOrder;
};
export type UserSecretMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    hPassword?: Prisma.SortOrder;
};
export type UserSecretSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type UserSecretCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserSecretCreateWithoutUserInput, Prisma.UserSecretUncheckedCreateWithoutUserInput> | Prisma.UserSecretCreateWithoutUserInput[] | Prisma.UserSecretUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSecretCreateOrConnectWithoutUserInput | Prisma.UserSecretCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserSecretCreateManyUserInputEnvelope;
    connect?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
};
export type UserSecretUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserSecretCreateWithoutUserInput, Prisma.UserSecretUncheckedCreateWithoutUserInput> | Prisma.UserSecretCreateWithoutUserInput[] | Prisma.UserSecretUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSecretCreateOrConnectWithoutUserInput | Prisma.UserSecretCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserSecretCreateManyUserInputEnvelope;
    connect?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
};
export type UserSecretUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserSecretCreateWithoutUserInput, Prisma.UserSecretUncheckedCreateWithoutUserInput> | Prisma.UserSecretCreateWithoutUserInput[] | Prisma.UserSecretUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSecretCreateOrConnectWithoutUserInput | Prisma.UserSecretCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserSecretUpsertWithWhereUniqueWithoutUserInput | Prisma.UserSecretUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserSecretCreateManyUserInputEnvelope;
    set?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    disconnect?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    delete?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    connect?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    update?: Prisma.UserSecretUpdateWithWhereUniqueWithoutUserInput | Prisma.UserSecretUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserSecretUpdateManyWithWhereWithoutUserInput | Prisma.UserSecretUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserSecretScalarWhereInput | Prisma.UserSecretScalarWhereInput[];
};
export type UserSecretUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserSecretCreateWithoutUserInput, Prisma.UserSecretUncheckedCreateWithoutUserInput> | Prisma.UserSecretCreateWithoutUserInput[] | Prisma.UserSecretUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserSecretCreateOrConnectWithoutUserInput | Prisma.UserSecretCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserSecretUpsertWithWhereUniqueWithoutUserInput | Prisma.UserSecretUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserSecretCreateManyUserInputEnvelope;
    set?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    disconnect?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    delete?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    connect?: Prisma.UserSecretWhereUniqueInput | Prisma.UserSecretWhereUniqueInput[];
    update?: Prisma.UserSecretUpdateWithWhereUniqueWithoutUserInput | Prisma.UserSecretUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserSecretUpdateManyWithWhereWithoutUserInput | Prisma.UserSecretUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserSecretScalarWhereInput | Prisma.UserSecretScalarWhereInput[];
};
export type UserSecretCreateWithoutUserInput = {
    hPassword: string;
};
export type UserSecretUncheckedCreateWithoutUserInput = {
    id?: number;
    hPassword: string;
};
export type UserSecretCreateOrConnectWithoutUserInput = {
    where: Prisma.UserSecretWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSecretCreateWithoutUserInput, Prisma.UserSecretUncheckedCreateWithoutUserInput>;
};
export type UserSecretCreateManyUserInputEnvelope = {
    data: Prisma.UserSecretCreateManyUserInput | Prisma.UserSecretCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserSecretUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserSecretWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserSecretUpdateWithoutUserInput, Prisma.UserSecretUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserSecretCreateWithoutUserInput, Prisma.UserSecretUncheckedCreateWithoutUserInput>;
};
export type UserSecretUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserSecretWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserSecretUpdateWithoutUserInput, Prisma.UserSecretUncheckedUpdateWithoutUserInput>;
};
export type UserSecretUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserSecretScalarWhereInput;
    data: Prisma.XOR<Prisma.UserSecretUpdateManyMutationInput, Prisma.UserSecretUncheckedUpdateManyWithoutUserInput>;
};
export type UserSecretScalarWhereInput = {
    AND?: Prisma.UserSecretScalarWhereInput | Prisma.UserSecretScalarWhereInput[];
    OR?: Prisma.UserSecretScalarWhereInput[];
    NOT?: Prisma.UserSecretScalarWhereInput | Prisma.UserSecretScalarWhereInput[];
    id?: Prisma.IntFilter<"UserSecret"> | number;
    userId?: Prisma.IntNullableFilter<"UserSecret"> | number | null;
    hPassword?: Prisma.StringFilter<"UserSecret"> | string;
};
export type UserSecretCreateManyUserInput = {
    id?: number;
    hPassword: string;
};
export type UserSecretUpdateWithoutUserInput = {
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserSecretUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserSecretUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    hPassword?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserSecretSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    hPassword?: boolean;
    user?: boolean | Prisma.UserSecret$userArgs<ExtArgs>;
}, ExtArgs["result"]["userSecret"]>;
export type UserSecretSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    hPassword?: boolean;
    user?: boolean | Prisma.UserSecret$userArgs<ExtArgs>;
}, ExtArgs["result"]["userSecret"]>;
export type UserSecretSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    hPassword?: boolean;
    user?: boolean | Prisma.UserSecret$userArgs<ExtArgs>;
}, ExtArgs["result"]["userSecret"]>;
export type UserSecretSelectScalar = {
    id?: boolean;
    userId?: boolean;
    hPassword?: boolean;
};
export type UserSecretOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "hPassword", ExtArgs["result"]["userSecret"]>;
export type UserSecretInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserSecret$userArgs<ExtArgs>;
};
export type UserSecretIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserSecret$userArgs<ExtArgs>;
};
export type UserSecretIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserSecret$userArgs<ExtArgs>;
};
export type $UserSecretPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserSecret";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        userId: number | null;
        hPassword: string;
    }, ExtArgs["result"]["userSecret"]>;
    composites: {};
};
export type UserSecretGetPayload<S extends boolean | null | undefined | UserSecretDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserSecretPayload, S>;
export type UserSecretCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserSecretFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserSecretCountAggregateInputType | true;
};
export interface UserSecretDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserSecret'];
        meta: {
            name: 'UserSecret';
        };
    };
    findUnique<T extends UserSecretFindUniqueArgs>(args: Prisma.SelectSubset<T, UserSecretFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserSecretFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserSecretFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserSecretFindFirstArgs>(args?: Prisma.SelectSubset<T, UserSecretFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserSecretFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserSecretFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserSecretFindManyArgs>(args?: Prisma.SelectSubset<T, UserSecretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserSecretCreateArgs>(args: Prisma.SelectSubset<T, UserSecretCreateArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserSecretCreateManyArgs>(args?: Prisma.SelectSubset<T, UserSecretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserSecretCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserSecretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserSecretDeleteArgs>(args: Prisma.SelectSubset<T, UserSecretDeleteArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserSecretUpdateArgs>(args: Prisma.SelectSubset<T, UserSecretUpdateArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserSecretDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserSecretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserSecretUpdateManyArgs>(args: Prisma.SelectSubset<T, UserSecretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserSecretUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserSecretUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserSecretUpsertArgs>(args: Prisma.SelectSubset<T, UserSecretUpsertArgs<ExtArgs>>): Prisma.Prisma__UserSecretClient<runtime.Types.Result.GetResult<Prisma.$UserSecretPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserSecretCountArgs>(args?: Prisma.Subset<T, UserSecretCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserSecretCountAggregateOutputType> : number>;
    aggregate<T extends UserSecretAggregateArgs>(args: Prisma.Subset<T, UserSecretAggregateArgs>): Prisma.PrismaPromise<GetUserSecretAggregateType<T>>;
    groupBy<T extends UserSecretGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserSecretGroupByArgs['orderBy'];
    } : {
        orderBy?: UserSecretGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserSecretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSecretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserSecretFieldRefs;
}
export interface Prisma__UserSecretClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserSecret$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserSecret$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserSecretFieldRefs {
    readonly id: Prisma.FieldRef<"UserSecret", 'Int'>;
    readonly userId: Prisma.FieldRef<"UserSecret", 'Int'>;
    readonly hPassword: Prisma.FieldRef<"UserSecret", 'String'>;
}
export type UserSecretFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where: Prisma.UserSecretWhereUniqueInput;
};
export type UserSecretFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where: Prisma.UserSecretWhereUniqueInput;
};
export type UserSecretFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where?: Prisma.UserSecretWhereInput;
    orderBy?: Prisma.UserSecretOrderByWithRelationInput | Prisma.UserSecretOrderByWithRelationInput[];
    cursor?: Prisma.UserSecretWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSecretScalarFieldEnum | Prisma.UserSecretScalarFieldEnum[];
};
export type UserSecretFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where?: Prisma.UserSecretWhereInput;
    orderBy?: Prisma.UserSecretOrderByWithRelationInput | Prisma.UserSecretOrderByWithRelationInput[];
    cursor?: Prisma.UserSecretWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSecretScalarFieldEnum | Prisma.UserSecretScalarFieldEnum[];
};
export type UserSecretFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where?: Prisma.UserSecretWhereInput;
    orderBy?: Prisma.UserSecretOrderByWithRelationInput | Prisma.UserSecretOrderByWithRelationInput[];
    cursor?: Prisma.UserSecretWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserSecretScalarFieldEnum | Prisma.UserSecretScalarFieldEnum[];
};
export type UserSecretCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSecretCreateInput, Prisma.UserSecretUncheckedCreateInput>;
};
export type UserSecretCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserSecretCreateManyInput | Prisma.UserSecretCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserSecretCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    data: Prisma.UserSecretCreateManyInput | Prisma.UserSecretCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserSecretIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserSecretUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSecretUpdateInput, Prisma.UserSecretUncheckedUpdateInput>;
    where: Prisma.UserSecretWhereUniqueInput;
};
export type UserSecretUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserSecretUpdateManyMutationInput, Prisma.UserSecretUncheckedUpdateManyInput>;
    where?: Prisma.UserSecretWhereInput;
    limit?: number;
};
export type UserSecretUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserSecretUpdateManyMutationInput, Prisma.UserSecretUncheckedUpdateManyInput>;
    where?: Prisma.UserSecretWhereInput;
    limit?: number;
    include?: Prisma.UserSecretIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserSecretUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where: Prisma.UserSecretWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserSecretCreateInput, Prisma.UserSecretUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserSecretUpdateInput, Prisma.UserSecretUncheckedUpdateInput>;
};
export type UserSecretDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
    where: Prisma.UserSecretWhereUniqueInput;
};
export type UserSecretDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserSecretWhereInput;
    limit?: number;
};
export type UserSecret$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type UserSecretDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSecretSelect<ExtArgs> | null;
    omit?: Prisma.UserSecretOmit<ExtArgs> | null;
    include?: Prisma.UserSecretInclude<ExtArgs> | null;
};
export {};
