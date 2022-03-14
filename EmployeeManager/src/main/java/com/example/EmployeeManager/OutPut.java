package com.example.EmployeeManager;

import java.io.Serializable;

public class OutPut<E,M> implements Serializable {
    private E entity;
    private M metaData;

    public E getEntity() {
        return entity;
    }

    public void setEntity(E entity) {
        this.entity = entity;
    }

    public M getMetaData() {
        return metaData;
    }

    public void setMetaData(M metaData) {
        this.metaData = metaData;
    }
}
