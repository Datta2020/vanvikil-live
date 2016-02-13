import React from 'react';
import Icon from 'react-fa';

export default function Loading() {
    return (
        <div className="text-center">
            <Icon spin name="spinner" size="5x" />
        </div>
    );
}
