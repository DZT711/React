export async function getPlayerAvatar(name) {
  try {
    const response = await fetch(
      `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch player avatar');
    }

    const data = await response.json();
    const player = data.player?.[0];

    return player?.strCutout || player?.strThumb || '';
  } catch (error) {
    console.error('Unable to load player avatar:', error);
    return '';
  }
}