from flask import Blueprint, request, jsonify
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent))
from database import get_db

music_bp = Blueprint('music', __name__)

@music_bp.route('/', methods=['GET'])
def get_all_music():
    db = get_db()
    songs = db.execute('SELECT * FROM music ORDER BY created_at DESC').fetchall()
    return jsonify([dict(song) for song in songs])

@music_bp.route('/<int:id>', methods=['GET'])
def get_music(id):
    db = get_db()
    song = db.execute('SELECT * FROM music WHERE id = ?', (id,)).fetchone()
    if song is None:
        return jsonify({'error': 'Song not found'}), 404
    return jsonify(dict(song))

@music_bp.route('/', methods=['POST'])
def create_music():
    data = request.get_json()
    title = data.get('title')
    artist = data.get('artist')
    album = data.get('album')

    if not title or not artist:
        return jsonify({'error': 'Title and artist are required'}), 400

    db = get_db()
    cursor = db.execute(
        'INSERT INTO music (title, artist, album) VALUES (?, ?, ?)',
        (title, artist, album)
    )
    db.commit()

    return jsonify({'id': cursor.lastrowid, 'message': 'Song added'}), 201

@music_bp.route('/<int:id>', methods=['PUT'])
def update_music(id):
    data = request.get_json()
    title = data.get('title')
    artist = data.get('artist')
    album = data.get('album')

    if not title or not artist:
        return jsonify({'error': 'Title and artist are required'}), 400

    db = get_db()
    db.execute(
        'UPDATE music SET title = ?, artist = ?, album = ? WHERE id = ?',
        (title, artist, album, id)
    )
    db.commit()

    return jsonify({'message': 'Song updated'})

@music_bp.route('/<int:id>', methods=['DELETE'])
def delete_music(id):
    db = get_db()
    db.execute('DELETE FROM music WHERE id = ?', (id,))
    db.commit()
    return jsonify({'message': 'Song deleted'})
