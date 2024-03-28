from fastapi import APIRouter
from enum import Enum
import numpy as np

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}


MAX_MATRIX_SIZE = 20

class MatrixOperation(Enum):
    add = 'addition'
    sub = 'subtraction'
    mult = 'multiplication'
    div = 'division'
    dot = 'product'


@router.get('/matrix')
def matrix(size: int = 10, op: MatrixOperation = MatrixOperation.dot) -> dict:
    size = max(1, min(size, MAX_MATRIX_SIZE))
    mx_a = np.random.rand(size, size)
    mx_b = np.random.rand(size, size)
    if op == MatrixOperation.add:
        res = mx_a + mx_b
    elif op == MatrixOperation.sub:
        res = mx_a - mx_b
    elif op == MatrixOperation.mult:
        res = mx_a * mx_b
    elif op == MatrixOperation.div:
        res = mx_a / mx_b
    elif op == MatrixOperation.dot:
        res = np.dot(mx_a, mx_b)
    return {
        'matrix_a': mx_a.tolist(),
        'matrix_b': mx_b.tolist(),
        op.value: res.tolist()
    }
